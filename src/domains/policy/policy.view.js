import React, {useState} from 'react';

import * as S from './policy.styled';

export default function PolicyView() {
  const [pageTop, setPageTop] = useState(false);
  const [pos, setPos] = React.useState(0);

  return (
    <S.Container
      onScroll={e => setPos(e.nativeEvent.contentOffset.y)}
      pageTop={pageTop}>
      <S.Description>
        The importance of these issues is so obvious that consultation with a
        broad asset allows important assignments to develop the positions taken
        by participants in relation to the tasks at hand. Likewise, the
        implementation of the planned targets provides a wide range of
        (specialists) participation in the formation of new proposals.
        Ideological considerations of a higher order, as well as the scope and
        place of training of personnel, play an important role in the formation
        of significant financial and administrative conditions.
      </S.Description>
      <S.Description>
        On the other hand, the further development of various forms of activity
        requires the definition and clarification of the appropriate activation
        conditions. Ideological considerations of a higher order, as well as the
        further development of various forms of activity, make it possible to
        carry out important tasks for the development of forms of development.
        Comrades! the beginning of daily work on the formation of a position
        requires the definition and clarification of further directions of
        development. The task of the organization, in particular the framework
        and place of staff training, makes it possible to assess the importance
        of forms of development.
      </S.Description>
      <S.Description>
        The significance of these problems is so obvious that the further
        development of various forms of activity makes it possible to assess the
        importance of the positions taken by the participants in relation to the
        tasks set. Likewise, the scope and place of staff training largely
        determines the creation of participatory systems. However, it should not
        be forgotten that the further development of various forms of activity
        entails the process of introducing and modernizing the development
        model. On the other hand, the strengthening and development of the
        structure requires the definition and clarification of further
        directions of development.
      </S.Description>
    </S.Container>
  );
}
