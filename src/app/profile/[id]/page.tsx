export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile</h1>
      <hr />
      <p className="text-3xl">Profile Page: {params.id}</p>
    </div>
  );
}
