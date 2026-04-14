// rcc
import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {
    state ={
        termoDeBusca: ''
    }
  render() {
    return (
      <div className='flex flex-clumn'>
        <IconField iconPosition='left'>
            <InputIcon className='pi pi-search'></InputIcon>
            <InputText className='w-full'
            placehholder='O que deseja ver...'></InputText>
        </IconField>
        <Button label='OK' 
        className='p-button-outlined mt-2'/>
      </div>
    )
  }
}
