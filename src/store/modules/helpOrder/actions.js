export function questionRequest(id, question) {
  return {
    type: '@help/QUESTION_REQUEST',
    payload: { id, question },
  };
}
