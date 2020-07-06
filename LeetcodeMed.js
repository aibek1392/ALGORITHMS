var maxArea = function(height) {
    const { length } = height;
    let i = 0;
    let j = length - 1;
    
    let max = 0;
    
    while (i < j) {
        const x = j - i;
        const y = height[height[i] < height[j] ? i++ : j--];
        
        const res = x * y;
            
        if (res > max) max = res;
    }
    
    return max;
};