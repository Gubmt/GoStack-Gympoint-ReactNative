import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

export function* createQuestion({ payload }) {
  try {
    const { id, question } = payload;

    yield call(api.post, `students/${id}/help-orders`, {
      question,
    });
  } catch (err) {
    Alert.alert('Falha ao criar pergunta, verifique os dados');
  }
}

export default all([takeLatest('@help/QUESTION_REQUEST', createQuestion)]);
