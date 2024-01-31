from .common import PoxymonSerializer
from users.serializers.common import PoxymonListUserSerializer
from reviews.serializers.common import ReviewSerializer
from poxymon_types.serializers.common import TypeSerializer

class PoxymonListSerializer(PoxymonSerializer):
  creator = PoxymonListUserSerializer()
  likes = PoxymonListUserSerializer(many=True)
  reviews = ReviewSerializer(many=True)
  type = TypeSerializer()
  move_one_type = TypeSerializer()
  move_two_type = TypeSerializer()