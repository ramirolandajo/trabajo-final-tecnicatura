import {FlatList, StyleSheet} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";
import {useGetSavedReseniasQuery} from "../services/userService";
import {useSelector} from "react-redux";
import StyledText from "../styledComponents/StyledText";
import ReseniaCard from "../components/ReseniaCard";
import {useFocusEffect} from "@react-navigation/native";

export default function SavedScreen({navigation}) {
    const {localId} = useSelector((state) => state.authReducer.value)
    const [savedReseniasData, setSavedReseniasData] = useState([])
    const {data: savedResenias, refetch} = useGetSavedReseniasQuery(localId)

    useFocusEffect(
        useCallback(() => {
            refetch()
        }, [])
    )

    useEffect(() => {
        if (savedResenias) {
            setSavedReseniasData(Object.values(savedResenias))
            console.log(savedResenias)
            console.log(savedReseniasData)
        }
    }, [savedResenias]);

    return (
        <StyledScreenWrapper>
            <StyledText size30 bold dark_green letters_spaced={2}>Guardados</StyledText>
            <FlatList
                data={savedReseniasData}
                renderItem={({item}) => (
                    <ReseniaCard resenia={item}/>
                )}
                keyExtractor={item => item.cuerpo}
            />
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
