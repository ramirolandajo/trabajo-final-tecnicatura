import {FlatList, StyleSheet} from 'react-native'
import React, {useEffect, useState, useCallback} from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import ReseniaCard from "../components/ReseniaCard";
import {useDispatch, useSelector} from "react-redux";
import {useGetReseniasQuery} from "../services/userService";
import {useFocusEffect} from "@react-navigation/native";
import StyledText from "../styledComponents/StyledText";

export default function HomeScreen({navigation}) {
    const {data: reseniasData, refetch} = useGetReseniasQuery();
    const [resenias, setResenias] = useState([]);

    useFocusEffect(
        useCallback(() => {
            refetch()
        },[])
    )

    useEffect(() => {
        if (reseniasData) {
            const reseniasRaw = Object.values(reseniasData)
            setResenias(reseniasRaw)
        }
    }, [reseniasData]);

    return (
        <StyledScreenWrapper>
            {!reseniasData ? (
                <StyledText>No hay resenias para mostrar...</StyledText>
            ) : (
                <FlatList
                    data={resenias}
                    renderItem={({item}) => (
                        <ReseniaCard navigation={navigation} resenia={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
