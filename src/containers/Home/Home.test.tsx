//Importações Externas
import React from 'react';
import { Provider } from 'react-redux'
import { ShallowWrapper } from 'enzyme';
import { Grid } from '@material-ui/core';
import createShallow from '@material-ui/core/test-utils/createShallow';

//Importações Internas
import Home from './Home';
import persistor from '../../persist'
import { configureStore } from '../../store/configureStore';
import {PersistGate} from "redux-persist/integration/react"; 
 
describe('Testing Home Component basics', () => {
    it('renders without styles', () => {
        const shallow = createShallow();

        const wrapper: ShallowWrapper = shallow(
            <Provider store={configureStore({
                tasks: []
            })}>
                
                    <Home />
                 
            </Provider>            
        );

        expect(wrapper.children(Home).find(Grid)).toHaveLength(0);
    });
});
