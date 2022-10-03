import React from 'react'
import StyledText from './StyledText.jsx'
import Card from './card.jsx'

const HostItem = ({hostname}) => (
    <Card>
        <StyledText text='bold'>{hostname}</StyledText>
    </Card>
)

export default HostItem
