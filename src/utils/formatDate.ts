function formatDate(deliveryDate: string){
  const [data, timeComplete] = deliveryDate.split(' ')
  const [hour, minutes] = timeComplete.split(':')

  const dateFormated = {
    date: data,
    time: `${hour}:${minutes}`
  }
  return dateFormated
}

export default formatDate