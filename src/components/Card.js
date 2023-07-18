import React from 'react'

export default function Card(props)
{
    return (
    <div className='Card'>
        <p className={`Institution id${props.id}`}>
            {props.Institution}</p>
        <p className={`Reports id${props.id}`}>
            {props.Reports}</p>
        <p className={`Age id${props.id}`}>
            Age: {props.Age}</p>
        <p className={`Gpa id${props.id}`}>
            Gpa: {props.Gpa}</p>
        <p className={`Year id${props.id}`}>
            Year: {props.Year}</p>
        {/* <p className={`Count id${props.id}`}>
            Count: {props.Count}</p> */}
        <p className={`Gender id${props.id}`}>
            Gender: {props.Gender==='F' ? 'Female' : 'Male'}</p>
    </div>
    )
}