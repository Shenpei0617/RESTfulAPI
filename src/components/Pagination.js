import React from "react";


//頁碼
export default function Pagination({page,totalPages}){
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/#">
            Previous
          </a>
        </li>
        {
            Array(11).fill(1).map((el, i)=>{
                const classNames = ['page-item']
                const p = page - 5 + i;
                if(p<1 || p>totalPages) return null;
                if(p===page) classNames.push('active');

                return <li className={classNames.join(' ')}>
                    <a className="page-link" href="/#">
                        {page - 5 + i}
                    </a>
                </li>
            })
        }


        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
        </nav>
    )
}