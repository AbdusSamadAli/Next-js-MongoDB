import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const data = await getTopicById(id);
  
  if (!data || !data.topic) {
    return <div>Failed to load topic.</div>;
  }

  const { title, description } = data.topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}

