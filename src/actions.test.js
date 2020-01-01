import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PEOPLE_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'       //get constants form constants file

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('Actions test', () => {
    it('should create an action to search people', () => {
        const text = 'wooo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })

    it('handles requesting swapi API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();

        const expectedAction = {
            type: REQUEST_PEOPLE_PENDING,
        }
        expect(action[0]).toEqual(expectedAction);
    })
})