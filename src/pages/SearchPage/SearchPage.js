import React from 'react'
import {DivSearch, HederText, DivSearchInput, ButtonSearch} from './StyledSearch'
import Search from '../../assets/search.png'
import Footer from '../../components/Footer/Footer'

const SearchPage = () =>{
        return (
        <DivSearch>
            <HederText>Busca</HederText> 
                <hr />
                <DivSearchInput>
                <form >
                    <ButtonSearch src={Search}></ButtonSearch>
                    <input type="text" placeholder="Restaurante" />
                
                </form>
                </DivSearchInput>
                <Footer />
        </DivSearch>    

        );   
} 

export default SearchPage