import NextHead from 'next/head'
import { FC } from 'react'

type QAPageSnippetProps = {
  question: { title: string; content: string }
  answers: { voteCount: number; content: string; link: string }[]
}

export const QAPageSnippet: FC<QAPageSnippetProps> = ({ question, answers }) => {
  if (!answers.length) {
    return null
  }

  const [topRatedAnswer, ...restAnswers] = answers.sort((a, b) => b.voteCount - a.voteCount)

  return (
    <NextHead>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'QAPage',
            mainEntity: {
              '@type': 'Question',
              name: question.title,
              text: question.content,
              answerCount: answers.length,
              upvoteCount: 0,
              acceptedAnswer: {
                '@type': 'Answer',
                text: topRatedAnswer.content,
                upvoteCount: topRatedAnswer.voteCount,
                url: topRatedAnswer.link,
              },
              suggestedAnswer: restAnswers.map((answer) => ({
                '@type': 'Answer',
                text: answer.content,
                upvoteCount: answer.voteCount,
                url: answer.link,
              })),
            },
          }),
        }}
      />
    </NextHead>
  )
}
