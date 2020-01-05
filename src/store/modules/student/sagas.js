import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { studentFailure } from './actions';

export function* createStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload;

    yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    // history.push('/students');
  } catch (err) {
    Alert.alert('Falha ao cadastrar usuário, verifique os dados');
    yield put(studentFailure());
  }
}

export function* updateStudent({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload;

    yield call(api.put, `students/${id}`, {
      name,
      email,
      age,
      weight,
      height,
    });

    // history.push('/students');
  } catch (err) {
    Alert.alert('Falha ao atualizar usuário, verifique os dados');
    yield put(studentFailure());
  }
}

export default all([
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
]);
