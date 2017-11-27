import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { TempRecorder, AVGTemperature } from '../../Model/Models';
import { BehaviorSubject } from 'rxjs/Rx';
import { Platform } from 'ionic-angular';

@Injectable()
export class TemperatureRepoProvider {
  dbObject: any;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(
    public http: Http,
    public platform: Platform,
    private sqlite: SQLite) {
    this.DBSetUp();
  }

  private DBSetUp(): void {
    this.databaseReady = new BehaviorSubject(false);

    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'TemperatureRecorder.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {

          this.dbObject = db;
          //let createSql: string =`DELETE FROM tbl_Temperature`;

          let createSql: string = `CREATE TABLE IF NOT EXISTS tbl_Temperature (
                                    temperatureId INTEGER  PRIMARY KEY AUTOINCREMENT,
                                    temperature TEXT NOT NULL,
                                    temperaturelogDate TEXT NOT NULL,
                                    temperaturelogTime TEXT NOT NULL)`;

          db.executeSql(createSql, {})
            .then(() => {
              console.log('Executed SQL');
              this.databaseReady.next(true);
            })
            .catch(e => {
              this.handleError(e)
            });
        })
        .catch(e => {
          this.handleError(e)
        });
    });
  }

  addTempurature(tempuraturelogDate: string, tempuraturelogTime: string, tempurature: string): Promise<any> {

    //let insertSql: string = `drop  table  tbl_Temperature`;
    let insertSql: string = `INSERT INTO tbl_Temperature (
                            temperature,
                            temperaturelogDate,
                            temperaturelogTime)
                            VALUES (?,?,?)`;


    return this.dbObject.executeSql(insertSql, [tempurature, tempuraturelogDate, tempuraturelogTime])
      .then(() => {
        console.log('Insert Successful')
        return true;
      }
      )
      .catch(e => {
        return this.handleError(e)
      });
  }

  getTempurature(): Promise<TempRecorder[]> {
    let selectSql: string = `SELECT temperatureId,temperature,temperaturelogDate,temperaturelogTime FROM tbl_Temperature`;

    let records: TempRecorder[];

    return this.dbObject.executeSql(selectSql, [])
      .then(data => {
        records = this.extractData(data);
        return records;
      })
      .catch(e => {
        return this.handleError(e);
      });
  }

  getAVGTempurature(): Promise<AVGTemperature[]> {
    let selectSql: string = ` SELECT AVG(temperature) as avgTemperature ,temperaturelogDate
                              FROM tbl_Temperature 
                              GROUP BY temperaturelogDate` ;


    let records: AVGTemperature[];

    return this.dbObject.executeSql(selectSql, [])
      .then(data => {
        records = this.extractAVGtempratureData(data);
        return records;
      })
      .catch(e => {
        return this.handleError(e);
      });
  }

  handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.statusText || error);
  }

  extractData(data: any): TempRecorder[] {

    let tempratureRecordes: TempRecorder[] = [];

    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        tempratureRecordes.push({
          temperatureID: data.rows.item(i).temperatureId,
          temperature: data.rows.item(i).temperature,
          temperaturelogDate: data.rows.item(i).temperaturelogDate,
          temperaturelogTime: data.rows.item(i).temperaturelogTime,
          avgTemperature: data.rows.item(i).avgTemperature,
        }
        );
      }
    }

    return tempratureRecordes;
  }

  extractAVGtempratureData(data: any): AVGTemperature[] {

    let avgTempratureRecordes: AVGTemperature[] = [];

    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        avgTempratureRecordes.push({
          temperaturelogDate: data.rows.item(i).temperaturelogDate,
          avgTemperature: data.rows.item(i).avgTemperature,
        }
        );
      }
    }

    return avgTempratureRecordes;
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
}
