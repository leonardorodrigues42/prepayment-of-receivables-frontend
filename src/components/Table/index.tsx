import { TableDiv } from "./styles"
import { useContext } from 'react';
import { RequestContext } from '../../contexts/Request';


export const Table = () => {
    const { data } = useContext(RequestContext) 
    console.log(data)
    
    return (
            <TableDiv>
                <h3>VOCÊ RECEBERÁ:</h3>
                <hr />
                <div>
                    <p>Amanhã: {data && <p>R$ {data["1"]}</p>}</p>
                    <p>Em 15 dias: {data && <p>R$ {data["15"]}</p>}</p>
                    <p>Em 30 dias: {data && <p>R$ {data["30"]}</p>}</p>
                    <p>Em 90 dias: {data && <p>R$ {data["90"]}</p>}</p>
                </div>
            </TableDiv>
    )
}
// "days": [30, 60, 90]