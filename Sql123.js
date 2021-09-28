
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({
  name: "signup",
});
const YourApp = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS signup (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(100),password VARCHAR(16))`,
        [],
        (sqlTxn, res) => {
          console.log("table created successfully");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });

  };
  const getmail = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM signup ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("categories retrieved successfully");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, name: item.name });
            }

            setCategories(results);
          }
        },
        error => {
          console.log("error on getting categories " + error.message);
        },
      );
    });


  };
  const addCategory = () => {
    if (!email) {
      alert("Enter category");
      return false;
    }

  }

  useEffect(async () => {
    await createTables();
    await getmail();
  }, []);
  return (
    <View style={{ flex: 1, paddingTop: 70, alignItems: "center" }}>
      <Text>
        wellCome.....
      </Text>
      <TextInput
        placeholder="enter the email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={addCategory} />

    </View>
  );
}
export default YourApp;