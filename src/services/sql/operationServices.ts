import { Operation } from "../../models/Operation";
import { createTable, getDBConnection } from "../../utils/sql/dbConfiguration";


export const saveOperation = async (operation: Operation) => {

    try {
        let db = await  getDBConnection();
        
        const insertQuery = `INSERT OR REPLACE INTO Operation(category, note, amount, type) values('${operation.category}', '${operation.note}', ${operation.amount}, '${operation.type}')`
  
        
        await db.executeSql(insertQuery);

        
    } catch (error) {
        console.log('Error', error);
        
    }

 

}


export const getAllOperations = async () => {

    let db = await  getDBConnection();

    const query = 'select id, type, amount, note from Operation';
    const result = await db.executeSql(query);


 
    for (let i = 0; i < result[0].rows.length; i++) {
        console.log('result[0].rows.item(i)', result[0].rows.item(i)); 
    }
    
}


