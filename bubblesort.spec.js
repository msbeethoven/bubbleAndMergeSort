describe('Bubbble Sort', function(){
  it('sorts an empty array', function(){
    expect(bubbleSort([]) ).toEqual([])
  });

  it('sorts an array of a single element', function(){
    expect(bubbleSort([7]) ).toEqual([7])
  });

  it('sorts an array of many elements', function(){
    expect(bubbleSort([5, 2, 7, 9, 3, 5, 4, 1, 0])).toEqual([0, 1, 2, 3, 4, 5, 5, 7, 9])
    
  });

});

