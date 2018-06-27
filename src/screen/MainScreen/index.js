import React from 'react';
import { fetchCurrency } from '../../apollo/apolloClient';
import { Text, Button, View, Examples, Subtitle, Spinner } from '@shoutem/ui';

export default class MainScreen extends React.Component{
    state = {
        data: '',
        showExamples: false,
        loading: false
    }

    fetchData = async () => {
        await this.setState({loading: true})
        const currency = await fetchCurrency("USD") 
        await this.setState({data: currency.data})
        await this.setState({loading: false})
    }

    showExamples  = async () => {
        await this.setState({showExamples: true})
    }

    render() {   
        return (
            <View style={{flex:1, justifyContent: 'center', padding: 20}}>
                <Subtitle style={{alignSelf: 'center', marginBottom: 10}}>My first Apollo app 🚀</Subtitle>
                { this.state.data != ''
                    ? <Text> {this.state.data.rates != null ? this.state.data.rates[Math.floor(Math.random() *  (this.state.data.rates.length - 1)) + 1].currency : 'Currency not found'} </Text>
                    : <Text> 'Click button to get Currency' </Text>} 
                
                { this.state.loading 
                    ? <Spinner /> 
                    : <Button style={{marginTop: 10, marginBottom: 10, borderWidth: 1, borderColor: 'black'}} onPress={this.fetchData}>  
                        <Text>Get Currency</Text>
                      </Button>
                }
                {this.state.showExamples
                    ? <Examples /> 
                    : <Button styleName="secondary" onPress={this.showExamples} style={{marginTop: 10, marginBottom: 10}}>
                        <Text>Shoutem Examples</Text>  
                      </Button>
                }
                
            </View>
        )
      }

}