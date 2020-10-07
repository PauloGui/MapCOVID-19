import React, { memo, useState, useEffect, useCallback } from 'react'
import Api from '../../api'

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('Brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])
    return (
        <div>
            Teste
        </div>
    )
}

export default memo(Main)