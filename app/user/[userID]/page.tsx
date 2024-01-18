export default function UserPage({ params }: { params: { slug: string } }) {
    return <div> user: {params.slug}</div>
  }