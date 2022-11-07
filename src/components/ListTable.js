import dayjs from "dayjs";

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
          {rows.map((el) => {
            const d =dayjs(el.birthday) 
            return(<tr key={el.sid}>
              <td>{ el.sid }</td>
              <td>{ el.name }</td>
              <td>{ el.mobile }</td>
              <td>{ el.email }</td>
              <td>{ d.isValid() && d.format('YYYY-MM-DD') }</td>
              {/* 原本日期格式1993-01-19T16:00:00.000Z 用dayjs轉成 2022-10-14*/}
              {/* 當日期為空值，用d.isValid()轉成空白 */}
            </tr>
            ) 
            
 
          })}
        </tbody>
      </table>
    );
  }
  