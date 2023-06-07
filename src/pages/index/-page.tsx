import { Helmet } from "react-helmet-async";
import styled from "styled-components";



const Div = styled.div`


`

export default function() {


    return <Div>
        <Helmet>
            <title>首页</title>
        </Helmet>
        首页
    </Div>
}