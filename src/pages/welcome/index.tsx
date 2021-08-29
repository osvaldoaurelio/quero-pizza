import { useEffect, useState } from 'react';

import { Header } from './header';
import { Menu } from './menu';
import { Main } from './main';
import { Info } from './info';

import { useIntersectionObserver } from '~hooks';
import { info, menu } from '~data';
import { shuffle } from '~utils';

export function Welcome() {
  const [words, setWords] = useState<string[]>([' ']);

  const { observerViewRef, scrollViewRef } = useIntersectionObserver();

  useEffect(() => setWords(shuffle(info)), [words]);

  return (
    <>
      <Header />
      <Info info={words} />
      <Menu observerViewRef={observerViewRef} menu={menu} />
      <Main scrollViewRef={scrollViewRef} menu={menu} />
    </>
  );
}
