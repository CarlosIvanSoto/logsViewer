import React from 'react'
import { FlatList, RefreshControl, View} from 'react-native'
import AppBar from "./AppBar"
import constants from '../constants'
import { useEffect, useState } from 'react'
import HostItem from './HostItem'

const HostList = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [hosts, setHosts] = useState(null)
    const [count, setCount] = useState(null)
    const getHosts = () => {
        fetch(`${constants.url}:${constants.port}${constants.views.hosts.uris.all}`)
            .then(res => res.json())
            .then(data => {
                setRefreshing(false)
                setHosts(data.results)
                setCount(data.count)
            })
            .catch(error => {
                console.log(`ERROR: ${error}`)
            })
    }
    const onRefresh = () => {
        setHosts([])
        getHosts()
    }
    
    useEffect(() => {
        getHosts()
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <AppBar count={count} title='host' />
            <FlatList
                data={hosts}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                renderItem={({ item: host }) => (
                    <HostItem {...host}/>
            )}/>
        </View>
    )
}

export default HostList