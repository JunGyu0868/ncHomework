import './css/pagination.css';

interface PaginationProps {
    current: number;
    total: number;
    pageSize: number;
    onPageChange: Function;
}

export default function Pagination(props: PaginationProps) {
    const { current, total, pageSize, onPageChange } = props;
    const pageCount = Math.ceil(total / pageSize);

    if (pageCount <= 0) return null;

    const pages: Array<String> = ['<<', '<'];
    for (
        let i = (current < 3 ? 1 : current + 3 > pageCount ? pageCount-4:  current-2);
        i <= (current + 2 > pageCount ? pageCount : current + 4 < 7 ? 5 : current+2);
        i++
    ) {
        pages.push(String(i));
    }
    pages.push('>');
    pages.push('>>');

    return (
        <ul className="pagination">
            {pages.map((page:String,index:number) => (
                <li key={index}
                    className={page === String(current) ? 'page-item-selected' : 'page-item'}
                    onClick={() => {
                        let tmpPageNum = current;
                        if (page === '<') {
                            tmpPageNum = tmpPageNum === 1 ? 1 : tmpPageNum - 1;
                        } else if (page === '>') {
                            tmpPageNum = tmpPageNum === pageCount ? pageCount : tmpPageNum + 1;
                        } else if (page === '<<') {
                            tmpPageNum = 1;
                        } else if (page === '>>') {
                            tmpPageNum = pageCount
                        } else {
                            tmpPageNum = Number(page);
                        }
                        onPageChange(tmpPageNum);
                    }}
                >
                    <a>{page}</a>
                </li>
            ))}
        </ul>
    );
}

export { Pagination };
