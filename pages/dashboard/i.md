{k1 == null ? (
<div>
<Inputfield
        type="text"
        placeholder="keyword"
        id="keyword"
        label="keyword"
        setState={setKey1}
        value={key1}
      />
<Inputfield
        type="text"
        placeholder="website"
        id="website"
        label="website"
        setState={setWeb1}
        value={web1}
      />
<Grid item xs={12}>
<div
className="submit-button"
onClick={() => {
updateProfile({
key1,
web1,
key2,
web2,
key3,
web3,
key4,
web4,
key5,
web5,
keyCount,
});
}} >
{(loading && "loading") || "create"}
</div>
</Grid>
</div>
) : k2 == null ? (
<div>
<Inputfield
        type="text"
        placeholder="keyword"
        id="keyword"
        label="keyword"
        setState={setKey2}
        value={key2}
      />
<Inputfield
        type="text"
        placeholder="website"
        id="website"
        label="website"
        setState={setWeb2}
        value={web2}
      />
<Grid item xs={12}>
<div
className="submit-button"
onClick={() => {
updateProfile({
key1,
web1,
key2,
web2,
key3,
web3,
key4,
web4,
key5,
web5,
keyCount,
});
}} >
{(loading && "loading") || "create"}
</div>
</Grid>
</div>
) : k3 == null ? (
<div>
<Inputfield
        type="text"
        placeholder="keyword"
        id="keyword"
        label="keyword"
        setState={setKey3}
        value={key3}
      />
<Inputfield
        type="text"
        placeholder="website"
        id="website"
        label="website"
        setState={setWeb3}
        value={web3}
      />
<Grid item xs={12}>
<div
className="submit-button"
onClick={() => {
updateProfile({
key1,
web1,
key2,
web2,
key3,
web3,
key4,
web4,
key5,
web5,
keyCount,
});
}} >
{(loading && "loading") || "create"}
</div>
</Grid>
</div>
) : k4 == null ? (
<div>
<Inputfield
        type="text"
        placeholder="keyword"
        id="keyword"
        label="keyword"
        setState={setKey4}
        value={key4}
      />
<Inputfield
        type="text"
        placeholder="website"
        id="website"
        label="website"
        setState={setWeb4}
        value={web4}
      />
<Grid item xs={12}>
<div
className="submit-button"
onClick={() => {
updateProfile({
key1,
web1,
key2,
web2,
key3,
web3,
key4,
web4,
key5,
web5,
keyCount,
});
}} >
{(loading && "loading") || "create"}
</div>
</Grid>
</div>
) : k5 == null ? (
<div>
<Inputfield
        type="text"
        placeholder="keyword"
        id="keyword"
        label="keyword"
        setState={setKey5}
        value={key5}
      />
<Inputfield
        type="text"
        placeholder="website"
        id="website"
        label="website"
        setState={setWeb5}
        value={web5}
      />
<Grid item xs={12}>
<div
className="submit-button"
onClick={() => {
updateProfile({
key1,
web1,
key2,
web2,
key3,
web3,
key4,
web4,
key5,
web5,
keyCount,
});
}} >
{(loading && "loading") || "create"}
</div>
</Grid>
</div>
)
