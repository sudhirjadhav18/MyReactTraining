const List = ({records}) => {
    return <ul>
        {records.map((item) =>
            <li className="_card" key={item.id}>
                <h3>{item.album}</h3>
                <span>{item.artist}</span>
                <p>{item.description}</p>
            </li>
        )}
    </ul>
}

export default List;