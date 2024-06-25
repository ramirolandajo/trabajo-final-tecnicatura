import React from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import DetalleReseniaCard from "../components/DetalleReseniaCard";

export default function DetalleReseniaScreen({route, navigation}) {
    const {resenia} = route.params;//devuelve void

    return (
        <StyledScreenWrapper>
            <DetalleReseniaCard resenia={resenia}/>
        </StyledScreenWrapper>
    )
}