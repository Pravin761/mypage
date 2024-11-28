import { useEffect, useMemo } from 'react';
import Particles, { ISourceOptions } from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";

export function useParticles(
  init: (engine: Engine) => Promise<void>,
  loaded: (container: Container | undefined) => Promise<void>,
  options: ISourceOptions
) {
  const memoizedOptions = useMemo(() => options, [options]);

  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      loaded={loaded}
      options={memoizedOptions}
      className="absolute inset-0"
    />
  );
}