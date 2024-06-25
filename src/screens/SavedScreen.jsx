import {Button, FlatList, StyleSheet, Text, View} from 'react-native'
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
        },[])
    )

    useEffect(() => {
        setSavedReseniasData(Object.values(savedResenias))
    }, [savedResenias]);

    return (
        <StyledScreenWrapper>
            <StyledText size30 bold dark_green letters_spaced={2}>Guardados</StyledText>
            <FlatList
                data={savedReseniasData}
                renderItem={({item}) => (
                <ReseniaCard resenia={item}/>
                )}
                keyExtractor={item => item.id}
            />
        </StyledScreenWrapper>
    )
}
const styles = StyleSheet.create({})
