module.exports = ({ emitter }) => {
  const publishSportNews = () => {
    emitter.emit('sport', { content: 'Este es un contenido aleatorio' });
  };
  const startPublishing = () => setInterval(publishSportNews, 2000);
  return { startPublishing };
};
