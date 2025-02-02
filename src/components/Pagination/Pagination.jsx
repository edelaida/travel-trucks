export const Pagination = ({ perPage, totalImage }) => {
    const pageNumber = [];
    for (let i = 1; i < Math.ceil(totalImage / perPage); i++){
        pageNumber.push(i)
    };

    return (
        <div>
            <ul>
                {
                    pageNumber.map((number) => {
                        return (
                            <li key={number}>
                                <a href='!#'> {number} </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )

}