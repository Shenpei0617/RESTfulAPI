export default function ListTable({ rows }) {
    console.log({ rows });
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">姓名</th>
            <th scope="col">手機</th>
            <th scope="col">Email</th>
            <th scope="col">生日</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((el) => (
            <tr key={el.sid}>
              <td>{ el.sid }</td>
              <td>{ el.name }</td>
              <td>{ el.mobile }</td>
              <td>{ el.email }</td>
              <td>{ el.birthday }</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  