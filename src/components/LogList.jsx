import React from 'react'
import { FlatList, RefreshControl, View } from 'react-native'
import LogItem from './LogItem'
import AppBar from "./AppBar"
import constants from '../constants'
import { useEffect, useState } from 'react'

const LogList = () => {   
    const [refreshing, setRefreshing] = useState(false);
    const [logs, setLogs] = useState(null)
    const [count, setCount] = useState(null)
    const getLogs = () => {
        fetch(`${constants.url}:${constants.port}${constants.views.logs.uris.all}`)
            .then(res => res.json())
            .then(data => {
                setRefreshing(false)
                setLogs(data.results)
                setCount(data.count)
            })
            .catch(error => {
                console.log(`ERROR: ${error}`)
            })
    }
    const onRefresh = () => {
        setLogs([])
        getLogs()
    }
    
    useEffect(() => {
        getLogs()
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <AppBar count={count} title='log' />
            <FlatList
                data={logs}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                renderItem={({ item: log }) => (
                    <LogItem {...log} />
            )}/>
        </View>
    )
}

export default LogList