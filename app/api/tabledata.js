import db from '../config/db';

export default function Home() {
  db.query('SELECT * FROM home_collection', (err, rows, fields) => {
    if (err) throw err;
    console.log(rows);
    return <div>Data from MySQL: {JSON.stringify(rows)}</div>;
  });

  return <div>Loading data from MySQL...</div>;
}   