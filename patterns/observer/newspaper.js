module.exports = ({ name, emitter }) => {
// Dependency Injection
  const listeners = { // Another pattern applied here...
    libero: ({ content }) => console.log(`LIBERO: C. Ronaldo es el mejor - ${content}`),
    sport: ({ content }) => console.log(`SPORT: No, Messi es el número uno- ${content}`),
    unknown: () => console.log('No se que decir ¯\_(ツ)_/¯'),
  };
  const handler = listeners[name] || listeners.unknown;
  emitter.on('sport', handler);
};
