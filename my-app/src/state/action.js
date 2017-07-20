export function changeCurrentSection(name) {
  return {
    type: 'CHANGE_SECTION',
    payload: name,
  }
}
