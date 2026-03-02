import type { QuestionDtoDC } from '@/shared/api';
import { Badge } from '@/shared/ui/badge';

interface QuestionTypeBadgeProps {
  type: Maybe<QuestionDtoDC['type']>;
  className?: string;
  loading?: boolean;
}

export const QuestionTypeBadge = ({
  type,
  className,
}: QuestionTypeBadgeProps) => {
  // const questionType = useStoreMap({
  //   store: infoModel.$quizParams,
  //   keys: [type],
  //   fn: (quizParams, [type]) =>
  //     quizParams?.question_types.find((it) => it.id === type) || null,
  // });

  return (
    <Badge variant={'reverse'} className={className}>
      {/* {questionType?.name} */}
    </Badge>
  );
};
