'use client'

import React from 'react'
import { Gauge } from 'ui'

type Props = {
    period: string;
    amount: number;
}


function GaugeChart({ period, amount }: Props) {
    return (

        <Gauge period={period} amount={amount} />

    )
}

export default GaugeChart