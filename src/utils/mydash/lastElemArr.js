function lastElemArr(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }

  return list.length ? list[list.length - 1] : undefined;
}
