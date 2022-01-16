fixture `FirstFixture`

test
    .page `https://www.hellofresh.com.au/`
    ('Test1', async t => {
    console.log("my first testcafe test");
});

test
    .page `https://www.google.co.in/`
    ('Test1', async t => {
    console.log("my second testcafe test");
});