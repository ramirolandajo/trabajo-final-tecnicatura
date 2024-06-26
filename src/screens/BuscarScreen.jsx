import {FlatList, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useGetUsersQuery} from "../services/userService";
import Search from "../components/Search";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";
import StyledScreenWrapper from "../styledComponents/StyledScreenWrapper";

export default function BuscarScreen() {
    const {data, isLoading} = useGetUsersQuery();
    const [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (data) {
            const usersRaw = Object.values(data)
            const usersFiltered = usersRaw.filter(user => user.nombreUsuario.toLowerCase().includes(keyword.toLowerCase()));
            setUsers(usersFiltered);
        }
    }, [data, keyword]);

    if (isLoading) return <Loader/>

    return (
        <StyledScreenWrapper style={{paddingTop: 70}}>
            <Search onSearch={setKeyword}/>
            <FlatList data={users} renderItem={({item}) => <UserCard user={item}/>} />
        </StyledScreenWrapper>)
}
const styles = StyleSheet.create({})
