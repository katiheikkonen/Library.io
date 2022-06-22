import mysql from "mysql2/promise";
import { config } from "./db-config";

  // export async function ping() {
  //   const connection = await mysql.createConnection(config.db);
  //   const [results] = await connection.execute(
  //     "SELECT asiakas_nimi, kirja_nimi FROM asiakkaat \
  //     JOIN lainat \
  //     ON lainat.lainaaja_id=asiakkaat.id \
  //     JOIN kappaleet \
  //     ON lainat.kappale_id=kappaleet.id \
  //     JOIN kirjat \
  //     ON kappaleet.kirja_id=kirjat.id \
  //     WHERE laina_aktiivinen=true;");
  //   return results;
  // }

  export async function ping() : Promise<PingResponse> {
    // return Promise.resolve({date: new Date()})
    const connection = await mysql.createConnection(config.db);
    const [ databaseDate ]: any = await connection.execute('SELECT CURRENT_TIMESTAMP() AS DATE;');
    const dbDate = databaseDate[0].DATE as Date
    console.log(typeof dbDate);
    return {
      date: new Date(),
      databaseDate: dbDate,
    }
  }