const func = (nums) => {
    for (let i = 1; i <= nums; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}
    func(5);