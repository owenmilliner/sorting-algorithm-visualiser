// TODO: Replace 'Generate New Array' with another feature. Thinking potentially 'References / Material used'.
// TODO: Change onclick event with sorting algorithms. If current page === summaries, do x.

/*
 TODO: On this page, there should be a number of different sections relating to each individual algorithm.
        Overview
        Big O (time complexity).  - Ontop of this, maybe a small 'What is Big O Notation' page - graph https://i.stack.imgur.com/ia6VB.png?
        Stability (y/n)
        Step by step example of the sort. (Maybe with a small visualised array in 5 boxes)
        May be difficult to add, but the big O graph, with all other lines slightly greyed out - and the relevant one shown

        MAYBE: space complexity

        The algorithm will only recognise that the list is in order if it makes no changes in a pass.
*/
const Summaries = () => {
  return (
    <div className='summaries'>
      <h2 className='summaries__title'>Bubble Sort</h2>
      <h3 className='summaries__subtitle'>Overview</h3>
      <p className='summaries__body'>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc. There are many variations of
        passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable. If you are going to use a passage
        of Lorem Ipsum, you need to be sure there isn't anything embarrassing
        hidden in the middle of text. All the Lorem Ipsum generators on the
        Internet tend to repeat predefined chunks as necessary, making this the
        first true generator on the Internet. It uses a dictionary of over 200
        Latin words, combined with a handful of model sentence structures, to
        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
        is therefore always free from repetition, injected humour, or
        non-characteristic words etc. There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered alteration in some
        form, by injected humour, or randomised words which don't look even
        slightly believable. If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to
        repeat predefined chunks as necessary, making this the first true
        generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem
        Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic
        words etc. This is just another wall of text. This is just another wall
        of text. This is just another wall of text.
      </p>
      <div className='summaries__graph'></div>
      <h3 className='summaries__heading'>Big O Notation</h3>
      <p className='summaries__detail'>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable.
      </p>
    </div>
  );
};

export default Summaries;
