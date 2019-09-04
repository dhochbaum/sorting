describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single item', function(){
        expect(bubbleSort([4])).toEqual([4])
    });
    it('handles multiple values', function(){
        expect(bubbleSort([4,12,5,20,1])).toEqual([1,4,5,12,20])
    });
  });

  